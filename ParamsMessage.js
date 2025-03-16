
export const paramsMessage_v3 = {
  messageType: "STREAM", // Enum: ["GUI", "STREAM", "ACTION"]
  elements: [
    {
      accordionName: "standartAccordion",
      summaryName: "withButtons",
      keyName: "mastCurrentHeight", // Key for mast current height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 10.0, // Example value for current height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "withButtons",
      keyName: "mastParkHeigh", // Key for mast park height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 5.0, // Example value for park height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "withButtons",
      keyName: "mastNominalHeigh", // Key for mast nominal height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 20.0, // Example value for nominal height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "withButtons",
      keyName: "someCommand", // Key for the BUTTON_LIST
      parameterType: "BUTTON_LIST", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        buttons: [
          {
            command: "GO_TO_PARK",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "GO_TO_NOMINAL",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "STOP",
            isAvailable: true, // Assuming the button is available
          },
        ],
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "noButtons",
      keyName: "centerFreq", // Key for central frequency
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "noButtons",
      keyName: "measTime", // Key for measurement time
      parameterType: "NUMBER_CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        state: false, // Example state (auto mode)
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "noButtons",
      keyName: "measMode", // Key for measurement mode
      parameterType: "COMBOBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: "FM", // Example value
        values: ["FM", "AM"], // Example values
      },
    },
    {
      accordionName: "standartAccordion",
      summaryName: "noButtons",
      keyName: "AF", // Key for AFC (Automatic Frequency Control)
      parameterType: "CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        state: false, // Example state (AFC off)
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "withButtons",
      keyName: "mastCurrentHeight", // Key for mast current height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 10.0, // Example value for current height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "withButtons",
      keyName: "mastParkHeigh", // Key for mast park height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 5.0, // Example value for park height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "withButtons",
      keyName: "mastNominalHeigh", // Key for mast nominal height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 20.0, // Example value for nominal height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "withButtons",
      keyName: "someCommand", // Key for the BUTTON_LIST
      parameterType: "BUTTON_LIST", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        buttons: [
          {
            command: "GO_TO_PARK",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "GO_TO_NOMINAL",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "STOP",
            isAvailable: true, // Assuming the button is available
          },
        ],
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "noButtons",
      keyName: "centerFreq", // Key for central frequency
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "noButtons",
      keyName: "measTime", // Key for measurement time
      parameterType: "NUMBER_CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        state: false, // Example state (auto mode)
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "noButtons",
      keyName: "measMode", // Key for measurement mode
      parameterType: "COMBOBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: "FM", // Example value
        values: ["FM", "AM"], // Example values
      },
    },
    {
      accordionName: "standartAccordion_1",
      summaryName: "noButtons",
      keyName: "AF", // Key for AFC (Automatic Frequency Control)
      parameterType: "CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        state: false, // Example state (AFC off)
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "noButtons",
      keyName: "centerFreq", // Key for central frequency
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "noButtons",
      keyName: "measTime", // Key for measurement time
      parameterType: "NUMBER_CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 100.0, // Example value
        state: false, // Example state (auto mode)
        max: 1000.0, // Example max value
        min: 10.0, // Example min value
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "noButtons",
      keyName: "measMode", // Key for measurement mode
      parameterType: "COMBOBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: "FM", // Example value
        values: ["FM", "AM"], // Example values
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "noButtons",
      keyName: "AF", // Key for AFC (Automatic Frequency Control)
      parameterType: "CHECKBOX", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        state: false, // Example state (AFC off)
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "withButtons",
      keyName: "mastCurrentHeight", // Key for mast current height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 10.0, // Example value for current height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "withButtons",
      keyName: "mastParkHeigh", // Key for mast park height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 5.0, // Example value for park height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "withButtons",
      keyName: "mastNominalHeigh", // Key for mast nominal height
      parameterType: "NUMBER", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        value: 20.0, // Example value for nominal height
        max: 100.0, // Example max value
        min: 0.0, // Example min value
      },
    },
    {
      accordionName: "externalEventAccordion",
      summaryName: "withButtons",
      keyName: "someCommand", // Key for the BUTTON_LIST
      parameterType: "BUTTON_LIST", // Enum: ["NUMBER", "COMBOBOX", "NUMBER_CHECKBOX", "CHECKBOX", "BUTTON_LIST"]
      parameters: {
        buttons: [
          {
            command: "GO_TO_PARK",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "GO_TO_NOMINAL",
            isAvailable: true, // Assuming the button is available
          },
          {
            command: "STOP",
            isAvailable: true, // Assuming the button is available
          },
        ],
      },
    },
  ],
};
