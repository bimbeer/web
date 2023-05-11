<template>
  <CBox>
    <CBox>
      <CFormControl id="city" :isInvalid="errors.city.status">
        <CFormLabel>Your city</CFormLabel>
        <CInput
          v-model="city"
          @input="handleCityInput"
          placeHolder="Enter your city"
          p="1rem"
          rounded="1rem"
          size="lg"
        />
        <CFormErrorMessage>{{ errors.city.message }}</CFormErrorMessage>
      </CFormControl>
    </CBox>

    <CBox position="relative" w="100%" mb="1rem">
      <CBox
        zIndex="2"
        position="absolute"
        top="0"
        w="100%"
        bg="gray.800"
        p="0.25rem"
        rounded="1rem"
      >
        <CFlex
          v-if="citiesLoading"
          justify="center"
          align="center"
          p="1rem"
          my="0.25rem"
        >
          <CIcon
            name="spinner"
            size="2rem"
            color="yellow.200"
            class="spinner"
          />
        </CFlex>

        <CList
          v-if="cities.length > 0 && !citiesLoading"
          maxH="50svh"
          overflowY="scroll"
          class="list"
        >
          <CListItem v-for="city in cities" :key="city.id" mr="0.25rem">
            <CBox
              :_hover="{
                bg: 'yellow.100',
                color: 'gray.900',
                ml: '1rem',
              }"
              bg="gray.700"
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
            city !== profile.getLocation()?.label &&
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
    </CBox>
  </CBox>
</template>

<script>
import Validator from "@/helpers/Validator";
import useDebounceInput from "@/hooks/useDebounceInput";
import { geohashForLocation } from "geofire-common";
import LocationModel from "@/models/LocationModel";

import axios from "axios";
import {
  CBox,
  CFormControl,
  CFormLabel,
  CInput,
  CIcon,
  CFlex,
  CList,
  CListItem,
  CFormErrorMessage,
} from "@chakra-ui/vue";

export default {
  components: {
    CBox,
    CFormControl,
    CFormLabel,
    CInput,
    CIcon,
    CFlex,
    CList,
    CListItem,
    CFormErrorMessage,
  },

  data() {
    return {
      city: "",
      cities: [],
      citiesLoading: false,
      validator: new Validator(),
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

    handleCityInput(string) {
      if (this.validator.isEmpty(string)) {
        this.profile.setLocation(null);
        this.cities = [];
        this.citiesLoading = false;
        return;
      }
      if (
        this.validator.isEqual(this.profile.getLocation()?.label, this.city)
      ) {
        this.citiesLoading = false;
        return;
      }
      this.citiesLoading = true;
      this.debounceInput(string, this.fetchCities, 1000);
    },

    handleCitySelect(cityId) {
      let selectedCity = this.cities.find((city) => city.id === cityId);
      const location = new LocationModel(
        selectedCity.address.label,
        selectedCity.position.lat,
        selectedCity.position.lng
      );

      this.profile.setLocation(location);

      this.city = this.profile.getLocation()?.label;
      this.cities = [];
    },
  },

  props: ["profile", "errors"],

  mounted() {
    this.debounceInput = useDebounceInput();
    this.city = this.profile.getLocation().label;
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

.list::-webkit-scrollbar {
  width: 8px;
}

.list::-webkit-scrollbar-track {
  background: none;
}

.list::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #2d3748;
}

.list::-webkit-scrollbar-thumb:hover {
  background: #3b485f;
}
</style>
