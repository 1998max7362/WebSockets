const NUMBER_mastCurrentHeight = {
  displayName: 'Текущая Высота мачты',
  keyName: 'mastCurrentHeight',
  parameterType: 'NUMBER',
  context: {
    parameterUnit: 'M',
    unitList: ['milli','standard','kilo'],
  },
};

const NUMBER_mastParkHeigh = {
  displayName: 'Начальная Высота мачты',
  keyName: 'mastParkHeigh',
  parameterType: 'NUMBER',
  context: {
    parameterUnit: 'M',
    unitList: ['milli','standard','kilo'],
  },
};

const NUMBER_mastNominalHeigh = {
  displayName: 'Ниминальаня высота',
  keyName: 'mastNominalHeigh',
  parameterType: 'NUMBER',
  context: {
    parameterUnit: 'M',
    unitList: ['milli','standard','kilo'],
  },
};

const BUTTON_LIST_MAST = {
  displayName: 'Команды',
  keyName: 'someCommand',
  parameterType: 'BUTTON_LIST',
  context: {
    buttons: [
      {
        label: 'на парковку',
        command: 'GO_TO_PARK',
        keys: ['mastParkHeigh'],
      },
      {
        label: 'на номинал',
        command: 'GO_TO_NOMINAL',
        keys: ['mastNominalHeigh'],
      },
      {
        label: 'стоп',
        command: 'STOP',
        keys: [],
      },
    ],
  },
};

const NUMBER_CentralFreq = {
  displayName: 'Центральная частота',
  keyName: 'centerFreq',
  parameterType: 'NUMBER',
  context: {
    parameterUnit: 'HZ',
    unitList: ['standard', 'kilo', 'mega', 'giga'],
  },
};

const NUMBER_CHECKBOX_measTime = {
  displayName: 'Время измерения',
  keyName: 'measTime',
  parameterType: 'NUMBER_CHECKBOX',
  context: {
    checkBoxLabel: "Авто",
    parameterUnit: 'S',
    unitList: ['micro', 'milli', 'standard'],
  },
};

const COMBOBOX_measMode = {
  displayName: 'Режим измерения',
  keyName: 'measMode',
  parameterType: 'COMBOBOX',
};

const CHECKBOX_AF = {
  displayName: 'Включить АПЧ',
  keyName: 'AF',
  parameterType: 'CHECKBOX',
};

const summary_with_buttons = {
  summaryType: 'WITH_BUTTONS',
  summaryName: 'withButtons',
  elements: [
    NUMBER_mastCurrentHeight,
    NUMBER_mastParkHeigh,
    NUMBER_mastNominalHeigh,
    BUTTON_LIST_MAST,
    CHECKBOX_AF,
    COMBOBOX_measMode,
    NUMBER_CHECKBOX_measTime,
    NUMBER_CentralFreq
  ],
};

const summary_no_buttons = {
  summaryType: 'NO_BUTTONS',
  summaryName: 'noButtons',
  elements: [NUMBER_CentralFreq, NUMBER_CHECKBOX_measTime, COMBOBOX_measMode, CHECKBOX_AF],
};

const standardAccordion = {
  accordionType: 'STANDARD',
  accordionName: 'standardAccordion',
  accordionSummaries: [summary_with_buttons, summary_no_buttons],
};

const externalEventAccordion = {
  accordionType: 'EXTERNAL_EVENT',
  accordionName: 'externalEventAccordion',
  accordionSummaries: [summary_no_buttons,summary_with_buttons],
};

export const GUIMessage_v1 = {
  messageType: 'GUI',
  settings: [standardAccordion, { ...standardAccordion, accordionName: 'standardAccordion_1' }],
};

export const GUIMessage_v2 = {
  messageType: 'GUI',
  settings: [externalEventAccordion],
};

export const GUIMessage_v3 = {
  messageType: 'GUI',
  settings: [
    standardAccordion,
    { ...standardAccordion, accordionName: 'standardAccordion_1' },
    externalEventAccordion,
  ],
};
