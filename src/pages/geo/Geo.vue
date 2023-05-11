<template>
  <CBox>
    <CFormControl id="city">
      <CFormLabel>Twoje miasto</CFormLabel>
      <CInput
        v-model="city"
        @input="handleCitiesFetch"
        placeHolder="Wpisz miasto"
        p="1rem"
        rounded="1rem"
        mb="0.25rem"
        size="lg"
      />
    </CFormControl>

    <CFlex
      v-if="citiesLoading"
      justify="center"
      align="center"
      p="1rem"
      my="0.25rem"
    >
      <CIcon name="spinner" size="2rem" color="yellow.200" class="spinner" />
    </CFlex>
    <CList v-if="cities.length > 0 && !citiesLoading">
      <CListItem v-for="city in cities" :key="city.id">
        <CBox
          :_hover="{
            bg: 'yellow.100',
            color: 'gray.900',
            ml: '1rem',
          }"
          bg="gray.800"
          transition="all 0.15s ease-in"
          p="1rem"
          my="0.25rem"
          rounded="1rem"
          cursor="pointer"
          @click="handleCitySelect(city.id)"
        >
          {{ city.address.label }}
        </CBox>
      </CListItem>
    </CList>

    <CBox
      v-if="
        !citiesLoading &&
        cities.length === 0 &&
        city !== selectedCity.address?.label &&
        city
      "
      bg="gray.800"
      p="1rem"
      my="0.25rem"
      rounded="1rem"
    >
      Brak wyników
    </CBox>
  </CBox>
</template>

<script>
import {
  CFormControl,
  CFormLabel,
  CInput,
  CBox,
  CList,
  CListItem,
  CDivider,
  CFlex,
  CIcon,
} from "@chakra-ui/vue";

import axios from "axios";
import useDebounceInput from "@/hooks/useDebounceInput";

export default {
  components: {
    CFormControl,
    CFormLabel,
    CInput,
    CBox,
    CList,
    CListItem,
    CDivider,
    CFlex,
    CIcon,
  },

  data() {
    return {
      cities: [],
      citiesLoading: false,
      city: "",
      selectedCity: {},
    };
  },

  methods: {
    async fetchCities() {
      await axios
        .get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${
            this.city
          }&apiKey=${import.meta.env.VITE_hereApiKey}`
        )
        .then((res) => (this.cities = res.data.items));
      this.citiesLoading = false;
    },

    handleCitiesFetch(newString) {
      if (!newString) {
        this.cities = [];
        this.citiesLoading = false;
        return;
      }
      if (this.selectedCity.address?.label === this.city) {
        this.citiesLoading = false;
        return;
      }
      this.citiesLoading = true;
      this.debounceInput(newString, this.fetchCities, 500);
    },

    handleCitySelect(cityId) {
      this.selectedCity = this.cities.find((city) => city.id === cityId);
      this.city = this.selectedCity.address.label;
      this.cities = [];
    },
  },

  mounted() {
    this.debounceInput = useDebounceInput();
  },
};
</script>

<style scoped>
.spinner {
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
