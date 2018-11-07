/*
 * Definitions for IP differentiated services code points (DSCP)
 *
 * Taken from RFC-2597, Section 6 and RFC-2598, Section 2.3.
 */

exports.IPTOS_DSCP = {
  AF11 : 0x28,
  AF12 : 0x30,
  AF13 : 0x38,
  AF21 : 0x48,
  AF22 : 0x50,
  AF23 : 0x58,
  AF31 : 0x68,
  AF32 : 0x70,
  AF33 : 0x78,
  AF41 : 0x88,
  AF42 : 0x90,
  AF43 : 0x98,
  EF   : 0xb8,
}



/*
 * In RFC 2474, Section 4.2.2.1, the Class Selector Codepoints subsume
 * the old ToS Precedence values.
 */

const IPTOS_CLASS_MASK = 0xe0
const IPTOS_CLASS = (x) => (x & IPTOS_CLASS_MASK)
const IPTOS_CLASS_CS0 = 0x00
const IPTOS_CLASS_CS1 = 0x20
const IPTOS_CLASS_CS2 = 0x40
const IPTOS_CLASS_CS3 = 0x60
const IPTOS_CLASS_CS4 = 0x80
const IPTOS_CLASS_CS5 = 0xa0
const IPTOS_CLASS_CS6 = 0xc0
const IPTOS_CLASS_CS7 = 0xe0

const IPTOS_CLASS_DEFAULT = IPTOS_CLASS_CS0

/*
 * Definitions for options.
 */
const IPOPT_COPY = 0x80
const IPOPT_CLASS_MASK = 0x60
const IPOPT_NUMBER_MASK = 0x1f

const IPOPT_COPIED = (o) => (o) & IPOPT_COPY
const IPOPT_CLASS = (o) => (o) & IPOPT_CLASS_MASK
const IPOPT_NUMBER = (o) => (o) & IPOPT_NUMBER_MASK
const IPOPT_CONTROL = 0x00
const IPOPT_RESERVED1 = 0x20
const IPOPT_DEBMEAS = 0x40
const IPOPT_MEASUREMENT = IPOPT_DEBMEAS
const IPOPT_RESERVED2 = 0x60

const IPOPT_EOL = 0 /* end of option list */
const IPOPT_END = IPOPT_EOL
const IPOPT_NOP = 1 /* no operation */
const IPOPT_NOOP = IPOPT_NOP

const IPOPT_RR = 7 /* record packet route */
const IPOPT_TS = 68 /* timestamp */
const IPOPT_TIMESTAMP = IPOPT_TS
const IPOPT_SECURITY = 130 /* provide s,c,h,tcc */
const IPOPT_SEC = IPOPT_SECURITY
const IPOPT_LSRR = 131 /* loose source route */
const IPOPT_SATID = 136 /* satnet id */
const IPOPT_SID = IPOPT_SATID
const IPOPT_SSRR = 137 /* strict source route */
const IPOPT_RA = 148 /* router alert */

/*
 * Offsets to fields in options other than EOL and NOP.
 */
const IPOPT_OPTVAL = 0 /* option ID */
const IPOPT_OLEN = 1 /* option length */
const IPOPT_OFFSET = 2 /* offset within option */
const IPOPT_MINOFF = 4 /* min value of above */

const MAX_IPOPTLEN = 40

/* flag bits for ipt_flg */
const IPOPT_TS_TSONLY = 0 /* timestamps only */
const IPOPT_TS_TSANDADDR = 1 /* timestamps and addresses */
const IPOPT_TS_PRESPEC = 3 /* specified modules only */

/* bits for security (not byte swapped) */
const IPOPT_SECUR_UNCLASS = 0x0000
const IPOPT_SECUR_CONFIDS = 0xf135
const IPOPT_SECUR_EFTO = 0x789a
const IPOPT_SECUR_MMMM = 0xbc4d
const IPOPT_SECUR_RESTR = 0xaf13
const IPOPT_SECUR_SECRET = 0xd788
const IPOPT_SECUR_TOPSECRET = 0x6bc5

/*
 * Internet implementation parameters.
 */
const MAXTTL = 255 /* maximum time to live (seconds) */
const IPDEFTTL = 64 /* default ttl, from RFC 1340 */
const IPFRAGTTL = 60 /* time to live for frags, slowhz */
const IPTTLDEC = 1 /* subtracted when forwarding */

const IP_MSS = 576 /* default maximum segment size */
