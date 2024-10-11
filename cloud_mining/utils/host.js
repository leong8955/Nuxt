export default () => {
    const url = useRequestURL();
    const hostnameParts = url.hostname.split('.');
    const mainDomain = hostnameParts.length >= 2 ? hostnameParts.slice(-2).join('.') : url.hostname;
  
    // return useState("host", () => mainDomain);
    return useState("host", () => "abc.com");
  };
  