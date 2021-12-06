import React, { useEffect } from 'react'
import { Link, EthIdenticon } from '@1hive/1hive-ui'
import { getProfileForAccount } from '../lib/profile.js'

// const supportersCache = new Map()
const supporterIds = []

const SupportersBadge = ({ proposal }) => {
  // const [profile, setProfile] = useState(null)
  const stakes = proposal.stakes
  // console.log(stakes)

  // To defeat Prettier!
  const pCreatorDim = 43
  const blank = ''

  useEffect(() => {
    const supporterIds = stakes.map(stake => {
      return { id: stake.entity.id }
    })
    console.log(supporterIds.id)
  }, [proposal.id])

  // let cancelled = false
  // async function fetchProfile() {
  //   if (supportersCache.get(supporterIds.id)) {
  //     setProfile(supportersCache.get(supporterIds.id))
  //     return
  //   }

  //   const profile = await getProfileForAccount(supporterIds.id)
  //   // console.log(`sup.id: ${supporterIds.id}`)
  //   if (profile && !cancelled) {
  //     const profileData = { image: profile.image }
  //     setProfile(profileData)
  //     supportersCache.set(supporterIds.id, profileData)
  //     // console.log(`profdata: ${profileData}`)
  //   }
  // }

  // const {
  //   stakes: [
  //     {
  //       entity: { id: SupportersId },
  //     },
  //   ],
  // } = proposal
  // console.log(`Proposal:${proposal.id} Supported by:${SupportersId}`)

  // fetchProfile()
  // return () => {
  //   cancelled = true
  // }

  return (
    <>
      <div
        css={`
          display: flex;
        `}
      >
        {supporterIds.map(id => {
          if (!supporterIds) {
            return (
              <img
                css={`
                  color: black;
                  height: 25px;
                  width: 25px;
                  border-radius: 10px;
                  cursor: pointer;
                `}
              />
            )
            async function fetchProfile() {
              const profile = await getProfileForAccount(supporterIds.id)
              /* const promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 1000)
              }); */
              const profileData = { name: profile.name, image: profile.image }
              fetchProfile()
              return (
                <Link
                  key={id}
                  href={`/#/profile?account=${supporterIds.id}
                  `}
                  external={false}
                >
                  <div>
                    {profileData?.image ? (
                      <img
                        src={profileData.image}
                        height={pCreatorDim}
                        width={pCreatorDim}
                        alt={blank}
                        css={`
                          border-radius: 50%;
                          display: block;
                          object-fit: cover;
                          cursor: pointer;
                        `}
                      />
                    ) : (
                      <EthIdenticon
                        address={toString(supporterIds.id)}
                        radius={50}
                        scale={1.8}
                        css={`
                          cursor: pointer;
                        `}
                      />
                    )}
                  </div>
                </Link>
              )
            }
          }
        })}
      </div>
      <img
        css={`
          color: black;
          height: 25px;
          width: 25px;
          border-radius: 10px;
          cursor: pointer;
        `}
      />
    </>
  )
}

export default SupportersBadge
