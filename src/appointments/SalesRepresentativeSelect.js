// SalesRepresentativeSelect.js
import React from "react";
import { Select } from "flowbite-react";

const SalesRepresentativeSelect = ({ register }) => {
  const salesRepresentatives = [
    "Annabelle Rodriguez",
    "Aurore Diallo",
    "Alassane Laye",
    "Benoît Chamboissier",
    "Didier Richard",
    "Emmanuel Domi",
    "Fatima Jabri",
    "Freddy Tamboers",
    "Helene Jehamo",
    "Julien Hendrickx",
    "Julien Camilleri",
    "Justine Dallas",
    "Julien Morel",
    "Loris Miran",
    "Karine Nobile",
    "Malcom Pichaud",
    "Mathieu Renault",
    "Manuel Romero",
    "Murphy Verger",
    "Romuald Vandenbussche",
    "Simon Cadenne",
    "Simon Ley",
    "Sylvie Delon",
    "Sophie Portal",
    "Sophie Rousmans",
    "Théo Raymond",
    "Vincen Le Mauff",
    "Yann Sieciechowicz",
  ];

  return (
    <Select
      id="commercial"
      {...register("commercial", {
        required: "Sales Representative is required",
      })}
    >
      <option value="">Select Sales Representative</option>
      {salesRepresentatives.map((representative, index) => (
        <option key={index} value={representative}>
          {representative}
        </option>
      ))}
    </Select>
  );
};

export default SalesRepresentativeSelect;
