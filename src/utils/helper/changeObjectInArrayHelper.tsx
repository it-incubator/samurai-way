export const updateObjInArray = (items: any[], itemId: number, objPropName: string, newObjProps: Object) => {
  return items.map((el) => (el[objPropName] === itemId ? { ...el, ...newObjProps } : el));
};
