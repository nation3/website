import { ethers } from 'ethers'
import Passport from '../abis/Passport.json'

const fetchAvatar = async ({ passportID, passportContract, provider }) => {
  const owner = await passportContract.ownerOf(passportID)

  const ensName = await provider.lookupAddress(owner)
  if (!ensName) return false

  const avatar = await provider.getAvatar(ensName)
  if (!avatar) return false

  return { ensName, avatar }
}

const fetchAvatars = async () => {
  console.log(process.env.NEXT_PUBLIC_INFURA_ID)
  const provider = new ethers.providers.InfuraProvider(
    null,
    process.env.NEXT_PUBLIC_INFURA_ID
  )

  const passportContract = new ethers.Contract(
    '0x3337dac9F251d4E403D6030E18e3cfB6a2cb1333',
    Passport.abi,
    provider
  )
  const nextID = await passportContract.getNextId()
  const lastID = nextID - 1
  const promises = []
  const avatars = []
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  for (let i = 0; i <= lastID; i++) {
    await delay(500)
    promises.push(
      fetchAvatar({ passportID: i, passportContract, provider })
        .then((avatar) => {
          avatar && avatars.push(avatar.url)
        })
        .catch((e) => console.error(e))
    )
  }
  await Promise.all(promises)
  return avatars
}

export { fetchAvatars }
