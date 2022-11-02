var handler = async m => m.reply(`
╭─「 Donasi 」
│ • XL [087833306677]
│ • DANA [087833306677]
│ • OVO [087833306677]
│ • GOPAY [087833306677]
│ • SHOPPY PAY [087833306677]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287833306677
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
