import { FeatureFlags } from '@custom-types'

const featureFlags: Record<FeatureFlags, boolean> = JSON.parse(
  process.env.NEXT_PUBLIC_FEATURE_FLAGS || JSON.stringify({}),
)

export default featureFlags
