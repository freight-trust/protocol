# EthereumRegistrationAuthorityInterface

## addUpdateDomain

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to add or
  update._
- \_domainAuthority `address`: _Contract to resolve sub-domains. This contract
  must implement this interface._
- \_domainInfo `address`: _Contract which holds domain information for the
  domain name identified by_
- \_domainOwner `address`: _Account entitled to update the \_domainAuthority or
  the \_domainInfo address for this domain_

## removeDomain

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to remove._

## hasDomain

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to check._

**Return Parameters:**

- `bool`

## getAuthority

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to check._

**Return Parameters:**

- `address`

## getDomainInfo

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to check._

**Return Parameters:**

- `address`

## getDomainOwner

**Parameters:**

- \_domainHash `uint256`: _Keccak256 message digest of the domain to check._

**Return Parameters:**

- `address`

## getVersion

**Return Parameters:**

- `uint16`
