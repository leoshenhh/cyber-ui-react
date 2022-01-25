export default function (...names: (string | undefined)[]){
    return names.filter(Boolean).join(' ');
}
