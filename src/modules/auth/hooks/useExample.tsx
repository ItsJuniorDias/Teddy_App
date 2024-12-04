import React, { useEffect, useReducer } from "react";

export enum EnterpriseActionEnum {
  FETCH = "FETCH",
  LOADING = "LOADING",
  DEFAULT = "DEFAULT",
}

export type EnterpriseAction = {
  type: "FETCH" | "LOADING" | "DEFAULT";
  payload?: {};
};

export type ItemEnterprise = {
  id: string;
  type: string;
  title: string;
  description: string;
};

export type EnterpriseProps = {
  data: ItemEnterprise;
};

export type EnterpriseState = {
  data: EnterpriseProps[];
  loading?: boolean;
};

const reducer = (
  state: EnterpriseState,
  action: EnterpriseAction
): EnterpriseState => {
  const { type, payload } = action;

  switch (type) {
    case EnterpriseActionEnum.FETCH:
      return {
        ...state,
        ...payload,
      };
    case EnterpriseActionEnum.LOADING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const useExample = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
  });

  const fetch = async () => {
    try {
      // const { docs } = await firestore().collection('enterprises').get();

      const docs = {
        id: "01",
        type: "DEFAULT",
        title: "Teste useHook",
        description: "Teste",
      };

      dispatch({
        type: "FETCH",
        payload: {
          data: docs,
        },
      });

      dispatch({
        type: "LOADING",
        payload: {
          loading: false,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    state,
    dispatch,
  };
};
