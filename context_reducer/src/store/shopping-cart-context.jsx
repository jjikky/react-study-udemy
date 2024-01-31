import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});

// useReducer의 매개변수인 이 함수의 state인자로 최신 상태를 자동으로 받을 수 있음
function shoppingCardReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = [...state.items];

		const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.payload);
		const existingCartItem = updatedItems[existingCartItemIndex];

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
			updatedItems.push({
				id: action.payload,
				name: product.title,
				price: product.price,
				quantity: 1,
			});
		}

		return {
			...state,
			items: updatedItems,
		};
	}
	if (action.type === 'UPDATE_ITEM') {
		// 메모리에 있는 지난 상태는 항상 복사해서 사용
		const updatedItems = [...state.items];
		const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);

		const updatedItem = {
			...updatedItems[updatedItemIndex],
		};

		updatedItem.quantity += action.payload.amount;

		if (updatedItem.quantity <= 0) {
			updatedItems.splice(updatedItemIndex, 1);
		} else {
			updatedItems[updatedItemIndex] = updatedItem;
		}

		return {
			// 데이터 손실이 없도록 지난 상태를 복사
			...state,
			items: updatedItems,
		};
	}
	return state;
}

// context data 관리
export default function CartContextProvider({ children }) {
	const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCardReducer, { items: [] });
	function handleAddItemToCart(id) {
		// 여기 사용된 인자가 shoppingCartReducer의 action으로 사용
		shoppingCartDispatch({
			type: 'ADD_ITEM',
			payload: id,
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		shoppingCartDispatch({
			type: 'UPDATE_ITEM',
			payload: { productId, amount },
		});
	}

	const ctxValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>;
}
