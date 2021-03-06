/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {graphql} from 'relay-runtime'

graphql`
# THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
# DO NOT EDIT THIS FILE DIRECTLY

# Standard Fragments
# Nested fragments will spread one layer deep


fragment master_TreeContentFlat on TreeContentFlat {
  nodes {
    ...master_TreeContentFlatNodeNoNesting @relay(mask: false)
  }
}

fragment master_TreeContentFlatNode on TreeContentFlatNode {
  id
  name
  kind
  parentId
  parentKind
}


# No Relational objects
# No nested fragments


fragment master_TreeContentFlatNoNesting on TreeContentFlat {
  __typename
}

fragment master_TreeContentFlatNodeNoNesting on TreeContentFlatNode {
  id
  name
  kind
  parentId
  parentKind
}


# Deeply nested Fragments
# Will include n nested fragments
# If there is a recursive relation you will receive a
# "Cannot spread fragment within itself" error when using


fragment master_TreeContentFlatDeepNesting on TreeContentFlat {
  nodes {
    ...master_TreeContentFlatNodeDeepNesting @relay(mask: false)
  }
}

fragment master_TreeContentFlatNodeDeepNesting on TreeContentFlatNode {
  id
  name
  kind
  parentId
  parentKind
}


`
