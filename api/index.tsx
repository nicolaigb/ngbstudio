import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ng-web-backend-env.eba-b3yupdvs.us-east-1.elasticbeanstalk.com/',
  timeout: 1000,
});

/**
 * GET all works in database
 */
const getWorks = async () => instance.request({ url: 'works' }).then((value) => value.data).catch(() => null);

/**
 * GET specific work based on its tag
 */
const getWork = async (tag) => instance.request({ url: `works/${tag}` }).then((value) => value.data).catch(() => null);

export { getWorks, getWork };
