import { WebSocketServer } from 'ws';
import { GUIMessage_v1, GUIMessage_v2, GUIMessage_v3 } from './GUIMessage.js';
import { paramsMessage_v3 } from './ParamsMessage.js';

const wss = new WebSocketServer({ port: 8080 });

// console.log(GUIMessage_v3)

wss.on('connection', function connection(ws) {
  // console.log('connected', ws);
  ws.send(JSON.stringify(GUIMessage_v3));
  // setTimeout(() => ws.send(JSON.stringify(third_message)));
  ws.on('error', console.error);

  // const sendMessage = () =>
  //   setTimeout(() => {
  //     ws.send(JSON.stringify(paramsMessage_v3));
  //     sendMessage();
  //   }, 1000);
  // sendMessage();
  setTimeout(() => ws.send(JSON.stringify(paramsMessage_v3)), 1000);

  ws.on('message', function message(data) {
    const parsedData = JSON.parse(data);
    console.log(parsedData)
    // parsedData.rotators[0].maxPosition = 300;
    // console.log('received: ', parsedData);
    ws.send(JSON.stringify(paramsMessage_v3))
  });

  ws.on('close', () => console.log('closed'));
});

//  Новый формат событий

// Стриминг текущего состояния оборудования с бэка на фронт
const second_message = {
  messageType: 'STREAM',
  rotators: [
    {
      name: 'rotator1',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: 'MOVING',
    },
    {
      name: 'rotator1',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: 'STOPPED',
    },
  ],
  masts: [
    {
      name: 'mast1',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: 'MOVING',
    },
    {
      name: 'mast2',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: 'STOPPED',
    },
  ],
};

// команды управления от фронта на бэк (и обратно эхо ответ)
const third_message = {
  messageType: 'COMMAND',
  rotators: [
    {
      name: 'rotator1',
      action: 'GO_TO_PARK',
      nominalPosition: 50,
    },
    {
      name: 'rotator1',
      action: 'GO_TO_NOMINAL',
      nominalPosition: 50,
    },
  ],
  masts: [
    {
      name: 'mast1',
      action: 'GO_TO_PARK',
      nominalPosition: 50,
    },
    {
      name: 'mast2',
      action: 'GO_TO_NOMINAL',
      nominalPosition: 50,
    },
  ],
  switches: [
    {
      name: 'switch1',
      states: [
        {
          name: 'P1',
          state: true,
        },
        {
          name: 'P2',
          state: false,
        },
        {
          name: 'P3',
          state: false,
        },
        {
          name: 'P4',
          state: false,
        },
      ],
    },
  ],
};
