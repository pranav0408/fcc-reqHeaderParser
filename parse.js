var parse = (data) => {
    var ip = data['x-forwarded-for']
    var lang = data['accept-language']
    var client = data['user-agent']
    var out = {ipaddress:ip,language:lang,software:client}
    return out;
}
module.exports = parse;