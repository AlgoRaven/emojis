import fetch from 'node-fetch'

if (!globalThis.fetch) {
	;(globalThis as any).fetch = fetch
}

export enum EmojiSet {
	APPLE_HI_RES = 'img-apple-160',
	APPLE_LO_RES = 'img-apple-64',
	TWITTER_HI_RES = 'img-twitter-72',
	TWITTER_LO_RES = 'img-twitter-64',
}

const CONFIG = {
	OWNER: 'AlgoRaven',
	REPO: 'emojis',
	BRANCH: 'main',
	USER_AGENT: 'algoraven.com',
}

const BASE_URL = `https://github.com/${CONFIG.OWNER}/${CONFIG.REPO}/blob/${CONFIG.BRANCH}/data`

const cleanEmojiCode = (code: string) => {
	code = code.replace(/-fe0f/g, '')
	return code
}

export const getEmojiUrl = (set: EmojiSet, code: string) => {
	return `${BASE_URL}/${set}/${cleanEmojiCode(code)}.png?raw=true`
}

export class Emojis {
	private set: EmojiSet

	constructor(set: EmojiSet) {
		this.set = set
	}

	public getEmojiUrl = (code: string) => getEmojiUrl(this.set, code)
}
