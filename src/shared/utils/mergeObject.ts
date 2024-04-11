export const mergeObject = <T, D> (obj1: T, obj2: D): T & D => {
	 return JSON.parse(JSON.stringify({...obj1, ...obj2})) 
}