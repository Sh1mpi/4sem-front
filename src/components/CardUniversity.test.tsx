import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardUniversity from "./CardUniversity";
import { IUniversity } from "../models/IUniversity";

describe("CardUniversity", () => {
    const mockData: IUniversity = {
        name: "Harvard University",
        country: "United States",
    };

    it("отображает имя университета", () => {
        render(<CardUniversity data={mockData} />);
        const nameElement = screen.getByText("Harvard University");
        expect(nameElement).toBeInTheDocument();
    });

    it("отображает страну университета", () => {
        render(<CardUniversity data={mockData} />);
        const countryElement = screen.getByText("United States");
        expect(countryElement).toBeInTheDocument();
    });
});