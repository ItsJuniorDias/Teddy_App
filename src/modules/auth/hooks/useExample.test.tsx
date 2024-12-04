import { renderHook } from "@testing-library/react-hooks";
import { useExample } from "./useExample";

describe("useExample hook", () => {
  it("should initialize with loading state an call function", () => {
    const { result } = renderHook(() => useExample());

    expect(result.current.state.loading).toBe(false);
    expect(result.current.state).toEqual({
      data: {
        description: "Teste",
        id: "01",
        title: "Teste useHook",
        type: "DEFAULT",
      },
      loading: false,
    });
  });
});
