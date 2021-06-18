import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (email).trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' }); //encoding: binary, para no leer los @
  return `${base}${hash}`; //union de la base con el hash
};

export default gravatar;
