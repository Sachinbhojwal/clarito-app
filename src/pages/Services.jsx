import { useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ServicesHero from "../components/services/ServicesHero";
import SearchBar from "../components/services/SearchBar";
import CategoryFilter from "../components/services/CategoryFilter";
import ServiceGrid from "../components/services/ServiceGrid";
import EmptyState from "../components/services/EmptyState";

import { services } from "../data/services";

const categories = [
  "All",
  "Electrician",
  "Plumber",
  "Cleaning",
  "Painting",
  "AC Repair",
  "Carpenter",
];

const Services = () => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchSearch =
        service.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All"
          ? true
          : service.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">

        <ServicesHero />

        <section className="max-w-7xl mx-auto px-6 py-14">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="flex justify-between items-center mt-10 mb-8">

            <h2 className="text-3xl font-bold">
              Available Services
            </h2>

            <span className="bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
              {filteredServices.length} Services
            </span>

          </div>

          {filteredServices.length > 0 ? (
            <ServiceGrid
              services={filteredServices}
            />
          ) : (
            <EmptyState
              clearSearch={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            />
          )}

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Services;