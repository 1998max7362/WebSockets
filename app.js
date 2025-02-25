import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('connected', ws);
  ws.send(JSON.stringify(first_message));

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const parsedData = JSON.parse(data);
    parsedData.rotators[0].maxPosition = 300;
    console.log('received: ', parsedData);
    ws.send(JSON.stringify(parsedData));
  });

  ws.on('close', () => console.log('closed'));
});

const first_message = {
  rotators: [
    {
      name: 'rotator1',
      actualPosition: 10,
      nominalPosition: 50,
      minPosition: 0,
      maxPosition: 100,
      parkPosition: 150,
      goToNominal: true,
      goToPark: true,
    },
    {
      name: 'rotator2',
      actualPosition: 100,
      nominalPosition: 300,
      minPosition: 100,
      maxPosition: 200,
      parkPosition: 200,
      goToNominal: true,
      goToPark: true,
    },
  ],
  masts: [
    {
      name: 'mast1',
      actualPosition: 10,
      nominalPosition: 10,
      minPosition: 200,
      maxPosition: 300,
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
      state: MOVING,
    },
    {
      name: 'rotator1',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: STOPPED,
    },
  ],
  masts: [
    {
      name: 'mast1',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: MOVING,
    },
    {
      name: 'mast2',
      actualPosition: 10,
      parkPosition: 150,
      minPosition: 0,
      maxPosition: 100,
      state: STOPED,
    },
  ],
};

// команды управления от фронта на бэк (и обратно эхо ответ)
const third_message = {
  messageType: 'COMMAND',
  rotators: [
    {
      name: 'rotator1',
      action: go_to_park,
      nominalPosition: 50,
    },
    {
      name: 'rotator1',
      action: go_to_nominal,
      nominalPosition: 50,
    },
  ],
  masts: [
    {
      name: 'mast1',
      action: go_to_park,
      nominalPosition: 50,
    },
    {
      name: 'mast2',
      action: go_to_nominal,
      nominalPosition: 50,
    },
  ],
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
};
