declare namespace _default {
    const title: string;
    namespace form {
        const components: (
            | {
                  label: string;
                  mask: boolean;
                  tableView: boolean;
                  type: string;
                  input: boolean;
                  key: string;
                  components: (
                      | {
                            label: string;
                            allowMultipleMasks: boolean;
                            showWordCount: boolean;
                            showCharCount: boolean;
                            tableView: boolean;
                            type: string;
                            input: boolean;
                            key: string;
                            widget: {
                                type: string;
                            };
                            placeholder: string;
                            prefix: string;
                            customClass: string;
                            suffix: string;
                            multiple: boolean;
                            defaultValue: null;
                            protected: boolean;
                            unique: boolean;
                            persistent: boolean;
                            hidden: boolean;
                            clearOnHide: boolean;
                            dataGridLabel: boolean;
                            labelPosition: string;
                            labelWidth: number;
                            labelMargin: number;
                            description: string;
                            errorLabel: string;
                            tooltip: string;
                            hideLabel: boolean;
                            tabindex: string;
                            disabled: boolean;
                            autofocus: boolean;
                            dbIndex: boolean;
                            customDefaultValue: string;
                            calculateValue: string;
                            refreshOn: string;
                            clearOnRefresh: boolean;
                            validateOn: string;
                            validate: {
                                required: boolean;
                                custom: string;
                                customPrivate: boolean;
                                minLength: string;
                                maxLength: string;
                                minWords: string;
                                maxWords: string;
                                pattern: string;
                            };
                            conditional: {
                                show: null;
                                when: null;
                                eq: string;
                                json?: undefined;
                            };
                            mask: boolean;
                            inputType: string;
                            inputMask: string;
                            id: string;
                            columns?: undefined;
                            autoAdjust?: undefined;
                        }
                      | {
                            columns: (
                                | {
                                      components: {
                                          label: string;
                                          allowMultipleMasks: boolean;
                                          showWordCount: boolean;
                                          showCharCount: boolean;
                                          tableView: boolean;
                                          type: string;
                                          input: boolean;
                                          key: string;
                                          widget: {
                                              type: string;
                                          };
                                          placeholder: string;
                                          prefix: string;
                                          customClass: string;
                                          suffix: string;
                                          multiple: boolean;
                                          defaultValue: null;
                                          protected: boolean;
                                          unique: boolean;
                                          persistent: boolean;
                                          hidden: boolean;
                                          clearOnHide: boolean;
                                          dataGridLabel: boolean;
                                          labelPosition: string;
                                          labelWidth: number;
                                          labelMargin: number;
                                          description: string;
                                          errorLabel: string;
                                          tooltip: string;
                                          hideLabel: boolean;
                                          tabindex: string;
                                          disabled: boolean;
                                          autofocus: boolean;
                                          dbIndex: boolean;
                                          customDefaultValue: string;
                                          calculateValue: string;
                                          refreshOn: string;
                                          clearOnRefresh: boolean;
                                          validateOn: string;
                                          validate: {
                                              required: boolean;
                                              custom: string;
                                              customPrivate: boolean;
                                              minLength: string;
                                              maxLength: string;
                                              minWords: string;
                                              maxWords: string;
                                              pattern: string;
                                          };
                                          conditional: {
                                              show: null;
                                              when: null;
                                              eq: string;
                                          };
                                          mask: boolean;
                                          inputType: string;
                                          inputMask: string;
                                          id: string;
                                      }[];
                                      width: number;
                                      offset: number;
                                      push: number;
                                      pull: number;
                                      type: string;
                                      input: boolean;
                                      key: string;
                                      tableView: boolean;
                                      label: string;
                                      placeholder: string;
                                      prefix: string;
                                      customClass: string;
                                      suffix: string;
                                      multiple: boolean;
                                      defaultValue: null;
                                      protected: boolean;
                                      unique: boolean;
                                      persistent: boolean;
                                      hidden: boolean;
                                      clearOnHide: boolean;
                                      dataGridLabel: boolean;
                                      labelPosition: string;
                                      labelWidth: number;
                                      labelMargin: number;
                                      description: string;
                                      errorLabel: string;
                                      tooltip: string;
                                      hideLabel: boolean;
                                      tabindex: string;
                                      disabled: boolean;
                                      autofocus: boolean;
                                      dbIndex: boolean;
                                      customDefaultValue: string;
                                      calculateValue: string;
                                      widget: null;
                                      refreshOn: string;
                                      clearOnRefresh: boolean;
                                      validateOn: string;
                                      validate: {
                                          required: boolean;
                                          custom: string;
                                          customPrivate: boolean;
                                      };
                                      conditional: {
                                          show: null;
                                          when: null;
                                          eq: string;
                                      };
                                      id: string;
                                  }
                                | {
                                      components: {
                                          label: string;
                                          mask: boolean;
                                          tableView: boolean;
                                          type: string;
                                          input: boolean;
                                          key: string;
                                          placeholder: string;
                                          prefix: string;
                                          customClass: string;
                                          suffix: string;
                                          multiple: boolean;
                                          defaultValue: null;
                                          protected: boolean;
                                          unique: boolean;
                                          persistent: boolean;
                                          hidden: boolean;
                                          clearOnHide: boolean;
                                          dataGridLabel: boolean;
                                          labelPosition: string;
                                          labelWidth: number;
                                          labelMargin: number;
                                          description: string;
                                          errorLabel: string;
                                          tooltip: string;
                                          hideLabel: boolean;
                                          tabindex: string;
                                          disabled: boolean;
                                          autofocus: boolean;
                                          dbIndex: boolean;
                                          customDefaultValue: string;
                                          calculateValue: string;
                                          widget: null;
                                          refreshOn: string;
                                          clearOnRefresh: boolean;
                                          validateOn: string;
                                          validate: {
                                              required: boolean;
                                              custom: string;
                                              customPrivate: boolean;
                                              min: string;
                                              max: string;
                                              step: string;
                                              integer: string;
                                          };
                                          conditional: {
                                              show: null;
                                              when: null;
                                              eq: string;
                                          };
                                          id: string;
                                      }[];
                                      width: number;
                                      offset: number;
                                      push: number;
                                      pull: number;
                                      type: string;
                                      input: boolean;
                                      key: string;
                                      tableView: boolean;
                                      label: string;
                                      placeholder: string;
                                      prefix: string;
                                      customClass: string;
                                      suffix: string;
                                      multiple: boolean;
                                      defaultValue: null;
                                      protected: boolean;
                                      unique: boolean;
                                      persistent: boolean;
                                      hidden: boolean;
                                      clearOnHide: boolean;
                                      dataGridLabel: boolean;
                                      labelPosition: string;
                                      labelWidth: number;
                                      labelMargin: number;
                                      description: string;
                                      errorLabel: string;
                                      tooltip: string;
                                      hideLabel: boolean;
                                      tabindex: string;
                                      disabled: boolean;
                                      autofocus: boolean;
                                      dbIndex: boolean;
                                      customDefaultValue: string;
                                      calculateValue: string;
                                      widget: null;
                                      refreshOn: string;
                                      clearOnRefresh: boolean;
                                      validateOn: string;
                                      validate: {
                                          required: boolean;
                                          custom: string;
                                          customPrivate: boolean;
                                      };
                                      conditional: {
                                          show: null;
                                          when: null;
                                          eq: string;
                                      };
                                      id: string;
                                  }
                            )[];
                            label: string;
                            mask: boolean;
                            tableView: boolean;
                            type: string;
                            input: boolean;
                            key: string;
                            conditional: {
                                show: string;
                                when: string;
                                json: string;
                                eq: string;
                            };
                            customConditional: string;
                            placeholder: string;
                            prefix: string;
                            customClass: string;
                            suffix: string;
                            multiple: boolean;
                            defaultValue: null;
                            protected: boolean;
                            unique: boolean;
                            persistent: boolean;
                            hidden: boolean;
                            clearOnHide: boolean;
                            dataGridLabel: boolean;
                            labelPosition: string;
                            labelWidth: number;
                            labelMargin: number;
                            description: string;
                            errorLabel: string;
                            tooltip: string;
                            hideLabel: boolean;
                            tabindex: string;
                            disabled: boolean;
                            autofocus: boolean;
                            dbIndex: boolean;
                            customDefaultValue: string;
                            calculateValue: string;
                            widget: null;
                            refreshOn: string;
                            clearOnRefresh: boolean;
                            validateOn: string;
                            validate: {
                                required: boolean;
                                custom: string;
                                customPrivate: boolean;
                                minLength?: undefined;
                                maxLength?: undefined;
                                minWords?: undefined;
                                maxWords?: undefined;
                                pattern?: undefined;
                            };
                            autoAdjust: boolean;
                            id: string;
                            allowMultipleMasks?: undefined;
                            showWordCount?: undefined;
                            showCharCount?: undefined;
                            inputType?: undefined;
                            inputMask?: undefined;
                        }
                  )[];
                  placeholder: string;
                  prefix: string;
                  customClass: string;
                  suffix: string;
                  multiple: boolean;
                  defaultValue: null;
                  protected: boolean;
                  unique: boolean;
                  persistent: boolean;
                  hidden: boolean;
                  clearOnHide: boolean;
                  dataGridLabel: boolean;
                  labelPosition: string;
                  labelWidth: number;
                  labelMargin: number;
                  description: string;
                  errorLabel: string;
                  tooltip: string;
                  hideLabel: boolean;
                  tabindex: string;
                  disabled: boolean;
                  autofocus: boolean;
                  dbIndex: boolean;
                  customDefaultValue: string;
                  calculateValue: string;
                  widget: null;
                  refreshOn: string;
                  clearOnRefresh: boolean;
                  validateOn: string;
                  validate: {
                      required: boolean;
                      custom: string;
                      customPrivate: boolean;
                  };
                  conditional: {
                      show: null;
                      when: null;
                      eq: string;
                  };
                  tree: boolean;
                  id: string;
                  disableOnInvalid?: undefined;
                  theme?: undefined;
                  size?: undefined;
                  leftIcon?: undefined;
                  rightIcon?: undefined;
                  block?: undefined;
                  action?: undefined;
              }
            | {
                  type: string;
                  label: string;
                  key: string;
                  disableOnInvalid: boolean;
                  theme: string;
                  input: boolean;
                  tableView: boolean;
                  placeholder: string;
                  prefix: string;
                  customClass: string;
                  suffix: string;
                  multiple: boolean;
                  defaultValue: null;
                  protected: boolean;
                  unique: boolean;
                  persistent: boolean;
                  hidden: boolean;
                  clearOnHide: boolean;
                  dataGridLabel: boolean;
                  labelPosition: string;
                  labelWidth: number;
                  labelMargin: number;
                  description: string;
                  errorLabel: string;
                  tooltip: string;
                  hideLabel: boolean;
                  tabindex: string;
                  disabled: boolean;
                  autofocus: boolean;
                  dbIndex: boolean;
                  customDefaultValue: string;
                  calculateValue: string;
                  widget: null;
                  refreshOn: string;
                  clearOnRefresh: boolean;
                  validateOn: string;
                  validate: {
                      required: boolean;
                      custom: string;
                      customPrivate: boolean;
                  };
                  conditional: {
                      show: null;
                      when: null;
                      eq: string;
                  };
                  size: string;
                  leftIcon: string;
                  rightIcon: string;
                  block: boolean;
                  action: string;
                  id: string;
                  mask?: undefined;
                  components?: undefined;
                  tree?: undefined;
              }
        )[];
    }
    const tests: {
        'Should set submittion in form with container and layout components'(
            form: any,
            done: any
        ): void;
    };
}
export default _default;
