export default function getColorFromString(string, options = {}) {
    const charCode = string[0].charCodeAt(0)

    const colorSeed = charCode.toString() + charCode.toString() + charCode.toString()

    const num = Math.round(0xffffff * parseInt(colorSeed))
    const r = num >> 16 & 255
    const g = num >> 8 & 255
    const b = num & 255

    return options.opacity ? `rgba(${r}, ${g}, ${b}, ${options.opacity})` : `rgb(${r}, ${g}, ${b}`
}
