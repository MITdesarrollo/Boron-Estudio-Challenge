export const handleSelectEN = ({ es, en }) => {
    es.classList.remove('langActive');
    en.classList.add('langActive');
};

export const handleSelectES = ({es, en}) => {
    en.classList.remove('langActive');
    es.classList.add('langActive');
};
