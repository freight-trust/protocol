# EthereumRegistrationAuthorityInterface
## addUpdateDomain

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to add or update.*
* _domainAuthority `address`: *Contract to resolve sub-domains. This contract must implement this interface.*
* _domainInfo `address`: *Contract which holds domain information for the domain name identified by*
* _domainOwner `address`: *Account entitled to update the _domainAuthority or the _domainInfo address for this domain*

## removeDomain

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to remove.*

## hasDomain

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to check.*

**Return Parameters:**
* `bool`
## getAuthority

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to check.*

**Return Parameters:**
* `address`
## getDomainInfo

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to check.*

**Return Parameters:**
* `address`
## getDomainOwner

**Parameters:**
* _domainHash `uint256`: *Keccak256 message digest of the domain to check.*

**Return Parameters:**
* `address`
## getVersion
**Return Parameters:**
* `uint16`
