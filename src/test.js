const test = () => {
    return new Promise((reslove) => {
      setTimeout(reslove('OK1111222'), 2000);
    });
  };
export default test;
