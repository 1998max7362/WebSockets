// import WebSocket, { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({
//   port: 8080,
// });

// wss.on('connection', onConnect);

// const onConnect = (wsClient) => {
//   console.log('Новый пользователь');
//   // отправка приветственного сообщения клиенту
//   wsClient.send(first_message);

//   wsClient.on('message', (message) => {
//     console.log(message);
//   });

//   wsClient.on('close', () => {
//     // отправка уведомления в консоль
//     console.log('Пользователь отключился');
//   });
// };

import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('connected', ws);
  ws.send(JSON.stringify(first_message));

  // while (true) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const parsedData = JSON.parse(data);
    console.log('received: ', parsedData);
    ws.send(JSON.stringify(parsedData));
  });

  ws.on('close', () => console.log('closed'));
  // }
});

const first_message = {
  rotators: [
    {
      name: 'rotator1',
      actualPosition: 10,
      nominalPosition: 10,
      minPosition: 10,
      maxPosition: 10,
      parkPosition: 100,
      goToNominal: true,
      goToPark: true,
    },
    {
      name: 'rotator2',
      actualPosition: 100,
      nominalPosition: 100,
      minPosition: 100,
      maxPosition: 100,
      parkPosition: 1000,
      goToNominal: true,
      goToPark: true,
    },
  ],
  masts: [
    {
      name: 'mast1',
      actualPosition: 10,
      nominalPosition: 10,
      minPosition: 10,
      maxPosition: 10,
      parkPosition: 100,
      goToNominal: true,
      goToPark: true,
    },
    {
      name: 'mast2',
      actualPosition: 20,
      nominalPosition: 20,
      minPosition: 20,
      maxPosition: 20,
      parkPosition: 200,
      goToNominal: true,
      goToPark: true,
    },
    {
      name: 'mast3',
      actualPosition: 30,
      nominalPosition: 30,
      minPosition: 30,
      maxPosition: 30,
      parkPosition: 300,
      goToNominal: true,
      goToPark: true,
    },
  ],
  switches: [
    {
      name: 'SW1',
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
    {
      name: 'SW2',
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
