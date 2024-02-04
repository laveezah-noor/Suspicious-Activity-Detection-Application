import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/theme";
import Icons from "react-native-vector-icons/Feather";
import Checkbox from "react-native-check-box";
import Button from "../components/shared/Button";

const SignupScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const Signup = () =>{
    navigation.navigate("Root")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: colors.black,
            }}
          >
            Create Account
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: colors.black,
            }}
          >
            Connect with your friend today!
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              color: colors.primary
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={colors.black}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              color: colors.primary
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="+91"
              placeholderTextColor={colors.black}
              keyboardType="numeric"
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: colors.grey,
                height: "100%",
              }}
            />

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={colors.black}
              keyboardType="numeric"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              color: colors.primary
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={colors.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Icons name="eye-off" size={24} color={colors.black} />
              ) : (
                <Icons name="eye" size={24} color={colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
        >
          <Checkbox
            style={{ marginRight: 8 }}
            isChecked={isChecked}
            onClick={()=>setIsChecked(!isChecked)}
            checkBoxColor={isChecked ? colors.primary : undefined}
            rightText={"I agree to the terms and conditions"}
            rightTextStyle={{color: colors.primary}}

          />
        </View>

        <Button
          title="Sign Up"
          filled
          onPress={()=>Signup()}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14, color: colors.black }}>Or Sign up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: colors.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text style={{color: colors.black}}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: colors.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text style={{color: colors.black}}>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.black }}>
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
