const hole = (obj) => {
  if(typeof obj !== 'object')
    return obj;
  const keys = Object.keys(obj);
  for(let key of keys)
  {
    if (typeof obj[key] === 'object')
      if (isNaN(obj[key].length))
        obj[key] = hole(obj[key])
      else
        obj[key] = [hole(obj[key][0])];
  }
  return obj;
}