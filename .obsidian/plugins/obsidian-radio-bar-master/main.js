const obsidian = require('obsidian');

class Radio extends obsidian.Plugin {
    async onload() {
        await this.loadTracks();
        this.setupAudioPlayer();
        this.settingsTab = new RadioSettings(this.app, this);
        this.addSettingTab(this.settingsTab);
    }

    async loadTracks() {
        this.tracks = await this.loadData() || [
            {
                name: 'Track 1',
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
            },
            {
                name: 'Track 2',
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
            },
        ];
    }

    async saveTracks() {
        await this.saveData(this.tracks);
    }

    setupAudioPlayer() {
        this.item = this.addStatusBarItem();
        const container = this.item.createEl('div');

        container.addClass('radio-container');
        this.audio = container.createEl('audio', { attr: { controls: true } });
        this.audio.addClass('radio-audio');
        this.audio.src = this.tracks[0].url;

        this.trackSelect = container.createEl('select');
        this.trackSelect.addClass('radio-track-select');
        this.updateTrackSelect();

        this.trackSelect.onchange = () => {
            const selectedTrack = this.tracks[this.trackSelect.value];
            this.audio.src = selectedTrack.url;
            this.audio.play();
        };
    }

    updateTrackSelect() {
        this.trackSelect.innerHTML = '';
        this.tracks.forEach((track, index) => {
            const option = this.trackSelect.createEl('option', { text: track.name, value: index });
            if (this.audio.src === track.url) option.selected = true;
        });
    }

    addTrack(track) {
        this.tracks.push(track);
        this.saveTracks();
        this.updateTrackSelect();
        this.settingsTab.displayTracks();
    }

    removeTrack(index) {
        this.tracks.splice(index, 1);
        this.saveTracks();
        this.updateTrackSelect();
        this.settingsTab.displayTracks();
    }

    destroyAudioPlayer() {
        this.item.destroy();
        this.item.remove();
    }
}

class RadioSettings extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Radio Settings' });

        const input = containerEl.createEl('input');
        input.addClass('radio-input');
        input.placeholder = 'Enter the name of the station';

        const url = containerEl.createEl('input');
        url.addClass('radio-input');
        url.placeholder = 'Enter the URL of the station';


        const button = containerEl.createEl('button');
        button.addClass('radio-button');
        button.textContent = 'Add Station';
        button.onclick = () => {
            this.plugin.addTrack({ name: input.value, url: url.value });
            input.value = ''; // Clear the input after adding
            url.value = ''; // Clear the input after adding
        };

        this.displayTracks();
    }

    displayTracks() {
        const { containerEl } = this;

        let list = containerEl.querySelector('ul');
        if (list) list.remove();

        list = containerEl.createEl('ul');
        list.addClass('radio-list');


        this.plugin.tracks.forEach((track, index) => {
            const listItem = list.createEl('li');
            listItem.addClass('radio-list-item');
            listItem.textContent = track.name;

            const removeButton = listItem.createEl('button', { text: 'Remove' });
            removeButton.addClass('radio-button');
            removeButton.onclick = () => {
                this.plugin.removeTrack(index);
            };
        });
    }
}

module.exports = Radio;
