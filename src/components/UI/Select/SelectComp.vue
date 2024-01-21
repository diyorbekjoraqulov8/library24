<template>
  <div ref="vuesingleselect" class="">
    <!-- selectedOption: {{ selectedOption }} -->
    <!-- {{ options }} -->
    <div v-if="!selectedOption" :class="classes.wrapper" class="">
      <div class="relative inline-block w-full">
        <input
          ref="search"
          :disabled="disabled"
          class="inputClass p-3 pt-2.5"
          :class="`
            ${[classes.input, isRequired]}
            ${font == 'base' ? 'text-base' : 'text-sm'}
            ${rounded == 'md' ? 'rounded-[6px]': rounded == 'lg' ? 'rounded-[8px]' : 'rounded-[4px]'}
          `"
          :id="inputId"
          @input="getSelectValue($event)"
          @focus="seedSearchText"
          @keydown.enter.prevent="setOption"
          @keyup.enter.prevent="setOption"
          @keyup.down="movePointerDown"
          @keyup.esc.stop="closeOut"
          @keyup.up="movePointerUp"
          :placeholder="placeholder"
          autocomplete="off"
          :required="required"
          v-model="searchText"
          :style="`
            max-width: ${width};
            height: ${height};
          `"
        />
        <div
          @click="toggleDropdown"
          :class="[classes.icons]"
          class="cursor-pointer absolute flex items-center rounded-e-md"
        >
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!dropdownOpen" d="M13 1L7 7L1 1" stroke="#505259" stroke-width="2"/>
            <path v-else d="M13 8L7 2L1 8" stroke="#505259" stroke-width="2"/>
          </svg>


        </div>

        <ul
          tabindex="-1"
          ref="options"
          v-if="matchingOptions"
          :style="{'max-height': maxHeight}"
          style="z-index: 100;padding"
          :class="[classes.dropdown]"
          class="absolute w-full overflow-auto appearance-none mt-px list-reset"
        >
          <li
            tabindex="-1"
            v-for="(option, idx) in matchingOptions"
            :key="idx"
            :class="idx === pointer ? classes.activeClass : ''"
            class="cursor-pointer outline-none"
            @mouseover="setPointerIdx(idx)"
            @keyup.enter="setOption"
            @keyup.up="movePointerUp"
            @keyup.down="movePointerDown"
            @click.prevent="setOption"
          >
            <slot name="option" v-bind="{option,idx}">{{ getOptionDescription(option[optionLabel]) }}</slot>
          </li>
        </ul>
      </div>
    </div>

    <div :class="classes.wrapper" v-if="selectedOption">
      <input
        :id="inputId"
        class="inputClass p-3 pt-2.5"
        :class="`
          ${[classes.input]}
          ${font == 'base' ? 'text-base' : 'text-sm'}
          ${rounded == 'md' ? 'rounded-[6px]': rounded == 'lg' ? 'rounded-[8px]' : 'rounded-[4px]'}
        `"
        ref="match"
        :required="required"
        @input="switchToSearch($event)"
        :value="getOptionDescription(selectedOption[optionLabel])"
        :style="`
          max-width: ${width};
          height: ${height};
        `"
      />
      <input type="hidden" :name="name" ref="selectedValue" :value="getOptionValue(selectedOption)" />

      <div class="flex absolute items-center" :class="classes.icons">
        <svg aria-hidden="true" @click="closeOut" class="cursor-pointer" viewBox="0 0 512 512">
          <path
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import pointerScroll from "./pointerScroll";
export default {
  props: {
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '44px'
    },
    selectValue: [String, Object],
    searchLink:String,
    rounded: String,
    font: String,
    value: Object,
    name: {
      type: String,
      required: false,
      default: () => ""
    },
    options: Array,
    optionLabel: {
      type: String,
      required: false,
      default: () => null
    },
    optionKey: {
      type: String,
      required: false,
      default: () => null
    },
    placeholder: {
      type: String,
      required: false,
      default: () => "Search Here"
    },
    maxHeight: {
      type: String,
      default: () => "220px",
      required: false
    },
    inputId: {
      type: String,
      default: () => "single-select",
      required: false
    },
    classes: {
      type: Object,
      required: false,
      default: () => {
        return {
          pointer: -1,
          wrapper: "single-select-wrapper",
          input: "search-input",
          icons: "icons",
          required: "required",
          activeClass: "active",
          dropdown: "dropdown"
        };
      }
    },
    initial: {
      type: String,
      required: false,
      default: () => null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    },
    required: {
      type: Boolean,
      required: false,
      default: () => false
    },
    maxResults: {
      type: Number,
      required: false,
      default: () => 30
    },
    tabindex: {
      type: String,
      required: false,
      default: () => {
        return "";
      }
    },
    getOptionDescription: {
      type: Function,
      default: function(option) {
        if (this.optionKey && this.optionLabel) {
          return option[this.optionKey] + " " + option[this.optionLabel];
        }
        if (this.optionLabel) {
          return option[this.optionLabel];
        }
        if (this.optionKey) {
          return option[this.optionKey];
        }
        return option;
      }
    },
    getOptionValue: {
      type: Function,
      default: function(option) {
        if (this.optionKey) {
          return option[this.optionKey];
        }

        if (this.optionLabel) {
          return option[this.optionLabel];
        }

        return option;
      }
    },
    filterBy: {
      type: Function,
      default: function(option) {
        if (this.optionLabel && this.optionKey) {
          return (
            option[this.optionLabel]
              .toString()
              .toLowerCase()
              .includes(this.searchText.toString().toLowerCase()) ||
            option[this.optionKey]
              .toString()
              .toLowerCase()
              .includes(this.searchText.toString().toLowerCase())
          );
        }

        if (this.optionLabel) {
          return option[this.optionLabel]
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase());
        }

        if (this.optionKey) {
          option[this.optionKey]
            .toString()
            .toLowerCase()
            .includes(this.searchText.toString().toLowerCase());
        }

        return option
          .toString()
          .toLowerCase()
          .includes(this.searchText.toString().toLowerCase());
      }
    }
  },
  mixins: [pointerScroll],
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keyup", this.handleClickOutside);
    if (this.value && this.options.filter(option => option.id === this.value.id)) {
      this.selectedOption = this.value;

      return;
    }
    this.searchText = this.initial;
  },
  unmounted() {
    document.removeEventListener("keyup", this.handleClickOutside);
    document.removeEventListener("click", this.handleClickOutside);
  },
  data() {
    return {
      searchText: null,
      selectedOption: null,
      dropdownOpen: false,
      searchOptions: []
    };
  },
  watch: {
    value(curr) {
      this.selectedOption = curr;
    },
    async searchText(curr, prev) {
      console.log("searchText");
      if (curr !== prev) {
        this.pointer = -1;
      }
    },
    selectedOption(curr) {
      if (curr) {
        this.$emit("update:selectValue", curr);
      }
    },
    dropdownOpen(curr, prev) {
      if (curr === prev) {
        return;
      }

      if (!curr) {
        // this.searchText = null;
        return;
      }

      if (!this.searchText) {
        this.searchText = "";
      }

      this.$nextTick().then(() => {
        this.$refs.search.focus();
      });
    }
  },
  computed: {
    isRequired() {
      if (!this.required) {
        return "";
      }

      if (this.selectedOption) {
        return "";
      }

      return "required";
    },
    matchingOptions() {
      if (!this.dropdownOpen) {
        return false;
      }
      if (this.searchText === null) {
        return null;
      }

      if (!this.searchText.length) {
        return [...this.options].slice(0, this.maxResults);
      }

      let res = this.options
        .filter(option => this.filterBy(option))
        .slice(0, this.maxResults);
      return res
    }
  },
  methods: {
    getSelectValue(event) {
      this.$emit("update:selectValue", event.target.value);
      this.searchText = event.target.value
    },
    setPointerIdx(idx) {
      this.pointer = idx;
    },
    seedSearchText() {
      this.dropdownOpen = true
      if (this.searchText !== null) {
        return;
      }

      this.searchText = "";
    },
    switchToSearch(event) {
      this.$emit("update:selectValue", event.target.value);
      this.$refs.selectedValue.value = null;
      this.searchText = event.target.value;
      this.selectedOption = null;
      this.dropdownOpen = true;
    },
    toggleDropdown() {
      if (this.disabled) {
        return;
      }
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeOut() {
      this.selectedOption = null;
      this.dropdownOpen = false;
      this.searchText = null;
      this.$emit("update:selectValue", null);
    },
    movePointerDown() {
      if (!this.matchingOptions) {
        return;
      }
      if (this.pointer >= this.matchingOptions.length - 1) {
        return;
      }

      this.pointer++;
    },
    movePointerUp() {
      if (this.pointer > 0) {
        this.pointer--;
      }
    },
    setOption() {
      if (!this.matchingOptions || !this.matchingOptions.length) {
        return;
      }

      if (this.pointer === -1) {
        this.pointer++;
      }

      this.selectedOption = this.matchingOptions[this.pointer];
      this.searchText = null;
      this.dropdownOpen = false;
      this.pointer = -1;
      this.$nextTick().then(() => {
        this.$refs.match.focus();
      });
    },
    handleClickOutside(e) {
      if (this.$el.contains(e.target) || e.target.id === this.inputId) {
        return;
      }

      this.dropdownOpen = false;
    }
  }
};
</script>
<style scoped>
.appearance-none {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.search-input {
  display: block;
  width: 100%;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  /* border-radius: 0.25em; */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-sizing: border-box;
}
.icons {
  padding: 0 1em;
  right: 0;
  top: 0;
  bottom: 0;
  fill: #606f7b;
}
.icons svg {
  width: 0.75em;
  height: 0.75em;
}
.single-select-wrapper {
  position: relative;
}
.required {
  _color: #721c24;
  _background-color: #f8d7da;
  border-color: #f5c6cb;
}
.dropdown {
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  color: #606f7b;
  border-radius: 0.25em;
  line-height: 1.25;
  text-align: left;
}
.dropdown::-webkit-scrollbar {
  width: 8px;
  /* background: #000; */
}
.dropdown::-webkit-scrollbar-thumb {
  background: #b7b4b495;
}
.dropdown > li {
  padding: 0.5em 0.75em;
}
.active {
  background: #dae1e7;
}
</style>