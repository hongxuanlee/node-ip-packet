/**
 *
 *
 *
**/
const IP_PACKET = {
    version: 4, // 4 bits
    ihl:  4,   // 4 bits
    tos: IPTOS.CLASS_CS0,
    totLen: 0, // 16 bits
    id: 0x00, // Identification 16 bits
    //fragOff; // 16bits
    ttl: 0x04; // 8bits
    protocol: ; // 16bits
    //checkSum; // 16bites
    //sourceAddr //32bits
    //destAddr  //32bits
};


/**
 *  extract ip packet object from ip datagram
 *
 */
function extract(datagram) {
    
}

/**
 *  Build packet from ip packet object 
 *  
 *
 */
function build(packet) {
   
}

function csum(unsigned short *ptr,int nbytes)
{

}

function ipChecksum() {

}


