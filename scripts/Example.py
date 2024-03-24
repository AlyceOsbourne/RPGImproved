import pathlib
import argparse
import frontmatter

parser = argparse.ArgumentParser(description='Process Obsidian file')
parser.add_argument('vault_path', type=str, help='Path to the vault')
parser.add_argument('file_path', type=str, help='Path to the file', default=None)
args = parser.parse_args()

if not args.file_path:
    print("No file path provided")
    exit()

abs_file_path = pathlib.Path(args.vault_path) / args.file_path

if not abs_file_path.exists():
    print(f"File {abs_file_path} does not exist")
    exit()

with open(abs_file_path, 'r') as file:
    post = frontmatter.load(file)
    print(post.metadata.get("fileClass"))
