/*jslint node: true */
"use strict";

//presumably defined here https://github.com/PunchThrough/bean-documentation/blob/master/app_message_types.md

module.exports = {

    MSG_ID_SERIAL_DATA        : Buffer.from([0x00, 0x00]),
    MSG_ID_BT_SET_ADV         : Buffer.from([0x05, 0x00]),
    MSG_ID_BT_SET_CONN        : Buffer.from([0x05, 0x02]),
    MSG_ID_BT_SET_LOCAL_NAME  : Buffer.from([0x05, 0x04]),
    MSG_ID_BT_SET_PIN         : Buffer.from([0x05, 0x06]),
    MSG_ID_BT_SET_TX_PWR      : Buffer.from([0x05, 0x08]),
    MSG_ID_BT_GET_CONFIG      : Buffer.from([0x05, 0x10]),
    MSG_ID_BT_ADV_ONOFF       : Buffer.from([0x05, 0x12]),
    MSG_ID_BT_SET_SCRATCH     : Buffer.from([0x05, 0x14]),
    MSG_ID_BT_GET_SCRATCH     : Buffer.from([0x05, 0x15]),
    MSG_ID_BT_RESTART         : Buffer.from([0x05, 0x20]),
    MSG_ID_GATING             : Buffer.from([0x05, 0x50]),
    MSG_ID_BL_CMD             : Buffer.from([0x10, 0x00]),
    MSG_ID_BL_FW_BLOCK        : Buffer.from([0x10, 0x01]),
    MSG_ID_BL_STATUS          : Buffer.from([0x10, 0x02]),
    MSG_ID_CC_LED_WRITE       : Buffer.from([0x20, 0x00]),
    MSG_ID_CC_LED_WRITE_ALL   : Buffer.from([0x20, 0x01]),
    MSG_ID_CC_LED_READ_ALL    : Buffer.from([0x20, 0x02]),
    MSG_ID_CC_ACCEL_READ      : Buffer.from([0x20, 0x10]),
    MSG_ID_CC_TEMP_READ       : Buffer.from([0x20, 0x11]),
    MSG_ID_AR_SET_POWER       : Buffer.from([0x30, 0x00]),
    MSG_ID_AR_GET_CONFIG      : Buffer.from([0x30, 0x06]),
    MSG_ID_DB_LOOPBACK        : Buffer.from([0xFE, 0x00]),
    MSG_ID_DB_COUNTER         : Buffer.from([0xFE, 0x01]),

};