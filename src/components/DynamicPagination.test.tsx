// src/components/DynamicPagination.test.tsx

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import DynamicPagination from "./DynamicPagination";
import { IUniversity } from "../models/IUniversity";
import 'intersection-observer';


// Мокируем модуль axios
vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("DynamicPagination", () => {
    const mockData: Array<IUniversity> = [
        { name: "Harvard University", country: "United States" },
        { name: "Stanford University", country: "United States" },
    ];

    it("отображает спqисок университетов", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: mockData });

        render(<DynamicPagination />);
        
        await waitFor(() => {
            expect(screen.getByText("Harvard University")).toBeInTheDocument();
            expect(screen.getByText("Stanford University")).toBeInTheDocument();
        });
    });
});
