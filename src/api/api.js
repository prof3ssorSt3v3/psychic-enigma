export class API {
  constructor() {
    //copy the array
    this.colors = colors;
  }

  getColors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.colors);
      }, 2345);
      // reject(new ColorError('just an example"), {id:1234, group:'blue', hex:'#0033CC'});
    });
  }
}

export class ColorError extends Error {
  constructor(msg, _color) {
    super(msg);
    this.name = 'ColorError';
    this.color = _color;
  }
}

const colors = [
  { id: '483b9c6f-7594-49c1-81d4-859ffe557703', group: 'green', hex: '#BADA55' },
  { id: 'e26f60b0-2943-4651-b9f9-9630e388743b', group: 'yellow', hex: '#FAF70F' },
  { id: 'e624e75c-2914-440a-924b-089a4b8b103c', group: 'yellow', hex: '#FAF655' },
  { id: '06765df6-68f0-4e2e-8b5a-c21f0fd6a83d', group: 'blue', hex: '#3BB0F7' },
  { id: '37874f13-7f1e-4dbc-a2f4-7ac34c9ab70a', group: 'blue', hex: '#5D88A2' },
  { id: 'e202655d-6d55-41b0-affb-ad4e62cdcc21', group: 'red', hex: '#F73B3E' },
  { id: 'fc42d7bd-2e66-43e4-84ad-f5a215d58dcd', group: 'purple', hex: '#785959' },
  { id: 'f0d18eca-8a62-4d40-9721-35510ef8ec2d', group: 'purple', hex: '#685DA2' },
  { id: 'aae25dfd-fff5-4bea-a33a-219a8d9620db', group: 'green', hex: '#4B7A49' },
  { id: '55cc5a2f-621f-4d58-837e-4e83cdd41f18', group: 'green', hex: '#32F92A' },
];
