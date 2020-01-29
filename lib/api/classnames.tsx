function classes(...names: Array<string | undefined>) {
    const _name = Array.from(new Set(names))
    return _name.filter(Boolean).join(' ');
}

export default classes;
