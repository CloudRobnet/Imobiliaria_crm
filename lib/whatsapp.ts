const DEFAULT_WHATSAPP_PHONE = '5511999999999'

export function getWhatsappLink(nomeDoImovel: string) {
    const phone =
        process.env.NEXT_PUBLIC_WHATSAPP_PHONE || DEFAULT_WHATSAPP_PHONE
    const text = `Vim pelo site, quero o imóvel ${nomeDoImovel}`
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
