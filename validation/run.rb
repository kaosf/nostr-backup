# My first event
id = "73f42b8485e437d07a7ce13014f1f3d25d0a50101a3b0a506f943da99887d629"

require "json"
require "digest"
# Serialize
[0,"a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b",1675482466,1,[],"test"].to_json
# SHA256
Digest::SHA256.hexdigest("[0,\"a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b\",1675482466,1,[],\"test\"]")
# ref. https://github.com/nostr-protocol/nips/blob/master/01.md

event = {"id":"73f42b8485e437d07a7ce13014f1f3d25d0a50101a3b0a506f943da99887d629","pubkey":"a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b","created_at":1675482466,"kind":1,"tags":[],"content":"test","sig":"9304be53d6ffec205f304c6d340a172e557dd58e306348867641b1b6e5877d1aeec1c6e52dc7a467b8cdfc9d5427f21ae53a7966d67be249440ae758a97acf22"}
serialized = [0, event[:pubkey], event[:created_at], event[:kind], [], event[:content]]

p Digest::SHA256.hexdigest(serialized.to_json) == event[:id]
#=> true
p event[:id] == id
#=> true

npub = "a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b"
sig = "9304be53d6ffec205f304c6d340a172e557dd58e306348867641b1b6e5877d1aeec1c6e52dc7a467b8cdfc9d5427f21ae53a7966d67be249440ae758a97acf22"
public_key = [npub].pack("H*")
signature = [sig].pack("H*")
message = [id].pack("H*")
require "schnorr"
p Schnorr.valid_sig?(message, public_key, signature)
#=> true
# ref. https://github.com/chaintope/bip-schnorrrb
