# React Native useRef Async Operation Crash on Unmount

This repository demonstrates a common bug in React Native applications involving the `useRef` hook and asynchronous operations. The bug occurs when a component unmounts before an asynchronous operation within a `useRef` callback completes, leading to crashes or unexpected behavior.

## Bug Description
The provided code uses `useRef` to store a reference to a component. An asynchronous operation (fetching data) is triggered within a `useEffect` hook.  If the component unmounts before the fetch completes, the callback attempts to update the component which no longer exists, resulting in an error.

## Solution
The solution involves using the `React.useCallback` hook to create a cleanup function which ensures that the asynchronous operation is cancelled when the component unmounts. This prevents attempts to access the component after it has been removed from the tree.