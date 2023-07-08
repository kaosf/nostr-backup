# [Experimental Project] ka's Nostr Backup

## Initialization note

```sh
# Setup asdf
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs v18.16.1
mkdir nostr-backup
cd nostr-backup
asdf local nodejs v18.16.1
npm init
# Enter for all prompts
npm i -S websocket
vi index.js
```

## Run

```sh
node index.js
```

## Development

```sh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install
npm i
```

## References

- https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/index.html
- nostr-util.js getEvents https://nostr-utils.pages.dev/js/nostr-utils.js
- https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/js/nostr-backup.js
- https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/js/relays.js
- https://github.com/theturtle32/WebSocket-Node/tree/cce6d468986dd356a52af5630fd8ed5726ba5b7a#client-example
- https://gist.github.com/kaosf/ec8df6598eeb08e2d8f26874330fe161
- note1v5meq7rv6ygtguqcr3q0wsj0e5ptrraln69dadw54yswkhml4ctsmf52hp
