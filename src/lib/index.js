import event from 'lib/event'
import exception from 'lib/exception'
import page from 'lib/page'
import query from 'lib/query'
import require from 'lib/require'
import set from 'lib/set'
import social from 'lib/social'
import time from 'lib/time'
import ecommerce from 'lib/ecommerce'
import screenview from 'lib/screenview'
import config from '../config'

export default {
  event,
  exception,
  page,
  query,
  require,
  set,
  social,
  time,
  screenview,
  ecommerce,
  commands: config.commands
}
