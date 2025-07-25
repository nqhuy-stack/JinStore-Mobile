import { COLORS } from '@/constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },

  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 10,
    paddingHorizontal: 15,
    gap: 10,
    width: screenWidth,
  },

  containerCheckBoxAll: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  btnCheckBoxAll: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    color: 'red',
    gap: 5,
  },

  selectAll: {
    fontSize: 14,
    fontWeight: 'normal',
    flexDirection: 'row',
    alignItems: 'center',
  },

  footer: {
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  },

  footerTop: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: COLORS.gray200,
  },

  footerBottom: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: COLORS.gray200,
  },

  footerLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },

  discountText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    lineHeight: 20,
  },

  couponLeft: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  totalContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  total: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },

  amountSaveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  amountSave: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.greenBase,
  },

  notiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 30,
  },

  notification: {
    fontSize: 16,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    color: COLORS.error,
  },

  saveText: {
    fontSize: 14,
    color: COLORS.greenBase,
  },

  btnCheckout: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  textCheckout: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  btnDisabled: {
    backgroundColor: COLORS.gray300,
  },

  couponWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF3CD',
    borderRadius: 8,
    marginTop: 8,
  },
  warningText: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 12,
    color: '#856404',
  },
  removeText: {
    color: '#DC3545',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default styles;
