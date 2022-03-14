export default function (...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

function scopedClassMaker(prefix: string) {
  return function (names?: string[], ...rest: string[]) {

    const scopedClassNames = names.map(name => {
      if (name || name === '') {
        return [prefix, name].filter(Boolean).join('-');
      }
      return '';
    });
    return [...scopedClassNames, ...rest].filter(Boolean).join(' ');
  };
}

export {scopedClassMaker};
