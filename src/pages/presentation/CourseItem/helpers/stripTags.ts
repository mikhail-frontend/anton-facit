export default (originalString) => {
    if (!originalString || typeof originalString !== 'string') {
        return { result: '' }
    }
    const withoutTags = originalString.replace(/(<([^>]+)>)/gi, '');
    const str = withoutTags || ''
    const result = str.replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/ig, '')
    return { result }
};
