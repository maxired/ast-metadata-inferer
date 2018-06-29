// @flow
import browserCompatData from 'mdn-browser-compat-data';
import { interceptAndFormat } from '../MsApiCatalogProvider';
import type { RecordType } from '../';

export default function MdnComaptDataProvider(): Array<RecordType> {
  const records = [];

  const foo = Object.keys(browserCompatData.api);

  for (let i = 0; i < foo.length; i++) {
    // ex. 'Window'
    const apiName = foo[i];
    // ex. Window {... }
    const apiObject = browserCompatData.api[apiName];
    // ex. ['alert', 'document', ...]
    const apis = Object.keys(apiObject);

    records.push({
      apiType: 'js-api',
      type: 'js-api',
      protoChain: [interceptAndFormat(apiName)],
      protoChainId: interceptAndFormat(apiName)
    });

    for (let j = 0; j < apis.length; j++) {
      records.push({
        apiType: 'js-api',
        type: 'js-api',
        protoChain: [interceptAndFormat(apiName), apis[j]],
        protoChainId: [interceptAndFormat(apiName), apis[j]].join('.')
      });
    }
  }

  return records;
}

