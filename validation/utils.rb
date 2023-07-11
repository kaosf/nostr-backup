require "json"
JSON.parse(File.open("/path/to/nostr-my-events.json").read).map { [_1["created_at"], _1["id"]] }.sort_by(&:first)
# Download JSON file from iris.to
